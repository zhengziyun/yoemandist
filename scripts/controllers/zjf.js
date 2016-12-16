angular.module("zjf",[])
.directive("news",function(){
    return {
      restrict:"EACM",
      replace:true,
      scope:{imgArr1:"=imgarrone",news1:"=new1",news2:"=new2",title:"@title"},
      template:'<div><div class="newOne"><div class="newOne_nav"><div>{{title}}</div><div>CHINA<img src="images/p1.jpg"/></div><div>台湾</div><div>更多</div></div><div class="newOne_main"><div><ul><li ng-repeat="key in news1" ng-class="{active:$first}">{{key.title | limitLength}}</li></ul><ul><li ng-repeat="key in news1" ng-class="{active:$first}">{{key.title | limitLength}}</li></ul></div><div><div><h3>国内图片</h3><div><img src="images/p3.jpg"><span>河南古墓发掘现场挖出牛肉汤</span></div></div><div><div ng-repeat="key in imgArr1"><img src={{key.img}}><span>zhongguo</span></div></div></div><div><div><h3>国内图片</h3><div><div ng-repeat="key in imgArr1"><img src={{key.img}}><span>zhongguo</span></div></div></div><div><h3>热门点击</h3><ul><li>aaaaaaaaaaaaaa</li><li>aaaaaaaaaaaaaa</li><li>aaaaaaaaaaaaaa</li><li>aaaaaaaaaaaaaa</li><li>aaaaaaaaaaaaaa</li></ul></div></div></div></div></div>',
      link:function(scope,ele,attr){
        
      }
    }
})
.filter("limitLength",[function(){
    return function(value){
      if(value.length > 22){
        return value.slice(0,23) + "...";
      }
      return value;
    }
  }]);