
//初始化数据
function tabbarinit() {
 return [
      { "current":0,
        "pagePath": "/pages/index/index",
        "iconPath": "/images/tb1.png",
        "selectedIconPath": "/images/tb1-1.png",
        "text": "主页"
      },
      {
        "current": 0,
        "pagePath": "/pages/category/category",
        "iconPath": "/images/tb2.png",
        "selectedIconPath": "/images/tb2-1.png",
        "text": "分类"

      },
      {
        "current": 0,
        "pagePath": "",
        "iconPath": "/images/tb3.png",
        "selectedIconPath": "/images/tb3-1.png",
        "text": "客服"
      },
      {
        "current": 0,
        "pagePath": "/pages/cart/cart",
        "iconPath": "/images/tb4.png",
        "selectedIconPath": "/images/tb4-1.png",
        "text": "购物车"
      },
      {
        "current": 0,
        "pagePath": "/pages/user/user",
        "iconPath": "/images/tb5.png",
        "selectedIconPath": "/images/tb5-1.png",
        "text": "我的"
      }
    ]

}

/**
 * tabbar主入口
 * @param  {String} bindName 
 * @param  {[type]} id       [表示第几个tabbar，以0开始]
 * @param  {[type]} target   [当前对象]
 */
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}


module.exports = {
  tabbar: tabbarmain
}