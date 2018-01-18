<template>
  <div class="header">
    <div class="container clearfix">
      <div class="nav-left fl">
        <ul class="clearfix">
          <li class="fl current-page"><a href="index.html">最新会议</a></li>
          <li class="fl"><a href="hisconf.html">历史会议</a></li>
          <li class="fl"><a href="confinfo.html">会议资讯</a></li>
          <li class="fl"><a href="per.html">个人中心</a></li>
        </ul>
      </div>
      <div class="nav-right fr clearfix">
        <div class="search fl" id="navSearch">
          <input type="text" placeholder="请输入关键字查询更多会议">
          <span></span>
        </div>
        <div class="assistant fl">
          <img src="../../common/image/header/createMeeting.png">
          <a href="setconf.html">发起会议</a>
        </div>
        <div class="assistant fl">
          <img src="../../common/image/header/secretary.png">
          <a href="#" id="callSecretary">小秘书</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>

<style scoped lang="scss">
  .header {
    position: relative;
    width: 100%;
    height: 45px;
    z-index: 999;
    background-color: #eff2f6;
    border: 1px solid #d0d6de;
    box-sizing: border-box;
    .nav-left ul li {
      text-align: center;
      a {
        display: inline-block;
        width: 120px;
        height: 45px;
        line-height: 45px;
        color: #000;
        transition: all .5s;
        :hover {
          color: #dfdfdf;
          background-color: #ff3643;
        }
      }
    }
    .nav-right {
      .search {
        position: relative;
        width: 266px;
        height: 35px;
        margin-right: 30px;
        input {
          position: absolute;
          left: 0;
          top: 8px;
          width: 240px;
          font-size: 14px;
          padding: 5px 25px 5px 16px;
          border: 1px solid #678fd6
        }
        span {
          position: absolute;
          right: -15px;
          top: 11px;
          width: 24px;
          height: 24px;
          cursor: pointer;
          background: url(../../common/image/header/search.png) no-repeat center;
        }
        .assistant {
          position: relative;
          text-align: center;
          transition: all .5s;
          :hover {
            background-color: #fff;
            a {
              color: #000;
            }
          }
          img {
            position: absolute;
            left: 0px;
            top: 10px;
            width: 25px;
            height: 25px;
          }
          a {
            display: inline-block;
            width: 120px;
            height: 45px;
            line-height: 45px;
            color: #515151;
          }
        }
        .assistant.personal {
          img {
            position: relative;
            left: -8px;
            width: 10px;
            height: 8px;
          }
          .slidedown {
            display: none;
            li {
              a {
                text-align: center;
                width: 100%;
                height: 40px;
                line-height: 40px;
                :hover {
                  background-color: #e4e4e4;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
