Vue.component("float-bot", {
    template: '    <div class="bottom_float fixed-bottom bg-m py-2">\n' +
        '      <div class="container">\n' +
        '          <div class="row">\n' +
        '              <div class="col-md-4 text-center col-xs-12 d-flex align-items-center px-0">\n' +
        '                  <h5 class="mb-0 color-w d-none d-sm-block">\n' +
        '                      &nbsp;加盟热线：400-8697-698\n' +
        '                  </h5>\n' +
        '                  <a href="contact_us.html" class="d-block d-sm-none d-flex justify-content-between align-items-center w-100 px-2">\n' +
        '                      <div class="d-flex align-items-center"> \n' +
        '                          <img src="img/icon1.png"></img>\n' +
        '                          <h5 class="mb-0 color-w h6">\n' +
        '                              &nbsp;加盟热线：400-8697-698\n' +
        '                          </h5>\n' +
        '                      </div>\n' +
        '                      <div class="d-flex align-items-center">\n' +
        '                          <img src="img/icon2.png"></img>\n' +
        '                          <h5 class="mb-0 color-w h6">立即预约</h5>\n' +
        '                      </div>\n' +
        '                  </a>\n' +
        '              </div>\n' +
        '              <div class="col-md-8 d-none d-sm-block">\n' +
        '                  <form class="form-inline" id="navbar-fixed-bottom-form">\n' +
        '                      <div class="form-group col-lg-5 index_md-3 align-self-center">\n' +
        '                          <label for="bottom_float_name" class="pr-2 color-w">姓名&nbsp;:&nbsp;&nbsp;</label>\n' +
        '                          <input type="text" class="form-control" id="bottom_float_name" placeholder="您的姓名" />\n' +
        '                      </div>\n' +
        '                      <div class="form-group col-lg-5 index_md-3 align-self-center">\n' +
        '                          <label for="bottom_float_phone" class="pr-2 color-w">手机&nbsp;:&nbsp;&nbsp;</label>\n' +
        '                          <input type="text" class="form-control" id="bottom_float_phone" placeholder="您的手机号" />\n' +
        '                      </div>\n' +
        '                      <div class="col-lg-2 index_md-6 align-self-center">\n' +
        '                          <button type="button" onclick="submitPhone()" class="btn bg-sub color-w-low">\n' +
        '                              在线预约\n' +
        '                          </button>\n' +
        '                      </div>\n' +
        '                  </form>\n' +
        '              </div>\n' +
        '          </div>\n' +
        '      </div>\n' +
        '    </div>'
});
Vue.component(
    'footer-copy', {
        template: '<footer class="bg-m pb-5">\n' +
            '  <div class="container">\n' +
            '      <div class="row border-bottom bdc-w">\n' +
            '          <div class="col-md-12 d-flex justify-content-center align-items-center py-3">\n' +
            '              <img src="img/logo.png">\n' +
            '          </div>\n' +
            '      </div>\n' +
            '      <div class="row pt-3 d-flex justify-content-center">\n' +
            '          <p class="display-l d-inline-block color-w-low ls-1 copyRight">公司地址： 安徽省合肥市滨湖新区金融港A2座16层&nbsp;&nbsp;安徽尚京品牌管理股份有限公司版权所有 皖ICP备18022821号-2</p>\n' +
            '      </div>\n' +
            '  </div>\n' +
            '    </footer>'
    }
);
new Vue({
    el: "#footer-zf"
});