<template>
  <div class="footer">
    <!--footer中部,详情-->
    <div class="footer-detail container clearfix">
      <!--footer中部左边,二维码-->
      <div class="footer-left footer-width fl clearfix">
        <div class="ewmbox fl">
          <img src="../../common/image/footer/wechat.png">
          <p>关注微信公众号</p>
        </div>
        <div class="ewmbox fl">
          <img src="../../common/image/footer/wft_mobile.png">
          <p><span>Wind金融终端</span><span>(机构专用)APP下载</span></p>
        </div>
      </div>
      <!--footer中部中间,联系方式-->
      <div class="footer-middle footer-width fl">
        <div class="contact">
          <div class="contact-img"><img src="../../common/image/footer/service_phone.png"></div>
          <div class="contact-info">
            <p>客服电话</p>
            <p>025-68673555转0</p>
          </div>
        </div>
        <div class="contact">
          <div class="contact-img"><img src="../../common/image/footer/service_mail.png"></div>
          <div class="contact-info">
            <p>服务邮箱</p>
            <p><a href="Mailto:3C@wind.com.cn">3C@wind.com.cn</a></p>
          </div>
        </div>
      </div>
      <!--footer中部右侧,下载-->
      <div class="footer-right footer-width fl">
        <div class="download-img"><img src="../../common/image/footer/download.png"></div>
        <div class="download">
          <p>软件下载</p>
          <p><a href="//www.wind.com.cn/windftp/wind.net/3C/3CSetup.exe"
                id="softwareDownload">桌面共享windows版本</a></p>
          <p><a href="agreement.html" target="_blank" id="agreementPage">用户协议</a></p>
        </div>
      </div>
    </div>
    <!--footer底部,合作伙伴-->
    <div class="friend container">
      <p class="fl"><img src="../../common/image/footer/partner.png"></p>
      <ul class="clearfix" id="friendList">
        <!--<li class="fl"><a href="#">银华基金</a></li>-->
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>

<style scoped lang="scss">
  .footer {
    width: 100%;
    height: 230px;
    background-color: #f4f4f4;
    z-index: 9999;
    .footer-detail {
      padding: 36px 0 0 0;
      text-align: center;
      border-bottom: 1px solid #e2e2e2;
      box-sizing: border-box;
      .footer-width {
        width: 30%;
      }
      .footer-left {
        img {
          width: 84px;
          height: 84px;
        }
        .ewmbox {
          margin-bottom: 22px;
          margin-right: 20px;
          color: #666666;
          font-size: 12px;

          img {
            margin-bottom: 10px;
          }

          p {
            span {
              display: block;
            }
          }
        }
      }
      .footer-middle {
        .contact {
          img {
            width: 44px;
            height: 44px;
          }
          div {
            display: inline-block;
            vertical-align: top;
          }
          .contact-img {
            margin-right: 10px;
          }
          .contact-info {
            text-align: left;

            p {
              margin-bottom: 6px;
              color: #666;
              font-size: 14px;
            }
          }
        }
      }
      .footer-right {
        .download-img {
          img {
            width: 44px;
            height: 44px;
          }
        }
        div {
          display: inline-block;
          vertical-align: top;
        }
        .download {
          text-align: left;
          p {
            margin-bottom: 6px;
            color: #666;
            font-size: 14px;
            :last-child a {
              margin-bottom: 6px;
              color: #666;
              font-size: 14px;
              :hover {
                color: #a0a0a0;
              }
            }
            a {
              color: #2196f3;
              :hover {
                color: #6ab7f5;
              }
            }
          }
        }
      }
      .friend {
        font-size: 14px;
        padding: 16px 0 0 0;
        p {
          width: 80px;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }
        ul li a {
          display: inline-block;
          width: 100px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #455e8b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

</style>
