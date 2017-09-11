! function() {
    var cache = {}

    window.define = function() {

        if (arguments.length == 2) {
            var name = arguments[0]
            var func = arguments[1]
        } else if (arguments.length == 3) {
            var name = arguments[0]
            var deps = arguments[1]
            var func = arguments[2]
        }
       
       //下面的判断可以修改成   var modules=deps? findDeps(deps):[]
        if (deps) {
            var modules = findDeps(deps)
        }
        
        cache[name] = func.apply(null, modules) //通过模块的名字给cache对象 键值对应回调函数的值

    }

    //deps依赖模块数组
    window.require = function(deps, func) {
        var modules = findDeps(deps)
        //fnc:回调函数
        func.apply(null, modules)
    }



     function findDeps(deps){
  	var modules = []
        for (var i = 0; i < deps.length; i++) {
            var name = deps[i] //name  依赖模块的名字
            var module = cache[deps[i]] //通过cache得到依赖模块的函数执行结果 
            //判断依赖模块的函数存在 执行并把结果 push到 modules数组
            if (module) {
                modules.push(module) //把执行结果push到modules里面
            }
        }
        return modules
  }
}()