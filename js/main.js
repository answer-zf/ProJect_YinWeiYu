//底部悬浮的验证
function submitPhone() {
  var name = $('#bottom_float_name').val()
  if (name == '') {
    alert('您的姓名不能为空噢')
    return false
  }
  var mobile = $('#bottom_float_phone').val()
  if (mobile == '') {
    alert('您的手机号不能留空噢')
    return false
  }
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/
  if (!myreg.test(mobile)) {
    alert('请填写有效手机号')
    return false
  }
  var url = '/api.php?c=post&f=save&id=book'
  $.ajax({
    url: url,
    contentType: 'application/x-www-form-urlencoded',
    dataType: 'json',
    async: false,
    data: {
      title: 'name',
      fullname: name,
      mobile: mobile,
      content: ''
    },
    type: 'POST',
    beforeSend: function() {},
    error: function(request) {},
    success: function(data) {
      if (data.status) {
        alert('您的信息提交成功，稍后我们会尽快与您联系')
      }
    }
  })
}
//首页导航效果
$(document).on('mousewheel DOMMouseScroll', function(e) {
  var delta =
    (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)) // firefox
  s = $(window).scrollTop()
  if (s != 0) {
    $('.navbar-zf-m').addClass('nav_box') //滚动条样式
  }
  if (delta > 0) {
    // 向上滚
    $('.navbar-zf-m').fadeIn(400) //导航条显示
    $('.navbar-zf-m').addClass('nav_box')
    if (s == 0) {
      $('.navbar-zf-m').removeClass('nav_box')
    }
  } else if (delta < 0) {
    // 向下滚
    $('.navbar-zf-m').fadeOut(700) //导航条隐藏
  }
})
// 获取界面上的轮播图容器
var $carousels = $('.carousel')
var startX, endX
var offset = 50
// 注册滑动事件
$carousels.on('touchstart', function(e) {
  // 手指触摸开始时记录一下手指所在的坐标X
  startX = e.originalEvent.touches[0].clientX
  // console.log(startX);
})
$carousels.on('touchmove', function(e) {
  // 变量重复赋值
  endX = e.originalEvent.touches[0].clientX
  // console.log(endX);
})
$carousels.on('touchend', function(e) {
  //console.log(e);
  // 结束触摸一瞬间记录最后的手指所在坐标X
  // 比大小
  // console.log(endX);
  // 控制精度
  // 获取每次运动的距离，当距离大于一定值时认为是有方向变化
  var distance = Math.abs(startX - endX)
  if (distance > offset) {
    // 有方向变化
    // console.log(startX > endX ? '←' : '→');
    // 2. 根据获得到的方向选择上一张或者下一张
    // - $('a').click();
    // - 原生的carousel方法实现 http://v3.bootcss.com/ javascript/#carousel-methods
    $(this).carousel(startX > endX ? 'next' : 'prev')
  }
})
