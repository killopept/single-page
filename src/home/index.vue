<template>
    <div class="page_login_login">
        <div class="form_logo_section">
          <img class="image" src="../assets/image/login/logo.png" alt="">
        </div>
        <div class="form_section">
            <text class="form_text">账号</text>
            <input type="text" v-model="accountNo" maxlength="18" class="form_input" placeholder="手机号/身份证号" :focus="true" />
        </div>
        <div class="form_section">
            <text class="form_text">密码</text>
            <input type="text" v-model="password" :password="true" maxlength="20" class="form_input" placeholder="请输入登录密码"/>
        </div>
        <button class="login_btn" type="default" :loading="loading" :disabled="disabled" @click="login">登录</button>
        <div class="register_link" @click="register">快速注册</div>
    </div>
</template>

<script>
  // import '../../core/index';
  // import {rpc, pushWindow, popWindow, redirectTo} from '../../core/services/api';

	export default{
		data() {
			return {
				loading: false,
        disabled: false,
        accountNo: '',
        password: '',
        nextPage: '',
        randomNum: '',
			}
    }, 
    methods: {
      login () {
        let params = {
            channel :'WEB',
            equipmentID: 'F2881F05A2FF38863F3582436F2C8661',
            keyWord: "",
            loginName: this.accountNo,
            mobileNo: "",
            msgKeyWord: "",
            msgpwd: "",
            optFlag:'1',
            passwordGm: "4pnx/TvOcBjk+cH9nLapz9R0G35YIc77qfw8nUfe60JXQDIkkPPPYmPrQZpY70xd1UTVBF6Orfb4mTh0v+e5lifXbZY8i2e/DsW85l/n+qSAwkve058H8heVyntHGTFa+G88deGZrChGn7rGcI6nnLZFKvhstFRJ8oFfl4qRk4cEp0hhFmlUUhm6S0s/EDjrjpOj0l2oupaDSJF0s6NfNiavtd0Jz2UxXfnsId7Mf3qF1dLF7oG+KzCjXKGvnaix4v1a3NSHduXSaOQ5Meqobftyj1cyppgEAC8SdZTrsg1bOc6byOktPkf/2FZXRrwwHSWr6wri2rg7ozhELs6MrMwENkIFKiewJR1uFXtbTPB9BaDyVEO16N7kdE8EarP5Q3euqJz2sptKBp2who4MyzBGWO9+KhjoxgYLuPcsSHU8dtrVqH+HRf8rcMQdyVhbBvP38WoFi4bJrXBh1lJ84rlVqKJ6DAdNjWDJ0A+erE40Zpajgy7734c5+oe2kWg0E69ZOfrM0d9fcPOJOsOjD1zLlBLJi9BvmkQJNovCyYkMD/OfrQtcwWh4fnrM7M1dA3QhXPb8khOMg12dYgaQ+ja55UkCI9asRB+D+BhkV+UpnY+Q34ijyO4sxlYiv+vc7vB6fyg6wn834HVqgjR+r6CJBHI7kZJuUMV3OcC+WubApwTSFaO/nticvC/5gx9M",
            randomNum: this.randomNum,
            usbKeyNumber: "",
            useropt: 2,
            verifyCode: "",
        }

        this.loading = true
        this.disabled = true

        // rpc('https://flameapp.cn/mbchannel/WEB030002.do', params,{header:{type:'J'}}).then((res: any) => {
          //     let loginInfo = res
          //     this.loading = false
          //     this.disabled = false
          //     this.$store.dispatch('commitUserInfo', loginInfo)
          //     if(this.nextPage){
          //         redirectTo(this.nextPage)
          //     }else{
          //         uni.navigateBack({
          //             delta: 1
          //         });
          //     }
        // })
      },
      register() {
        this.$router.push('/register')
      }
    },
    beforeMount (params) {
      const config = {
        method: 'post',
        data: {n:1},
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
        
      }
      this.request().post('http://flameapp.cn/inmanage_lb/IM02009.do', config).then(function (response) {
        console.log(response);
      })
        // this.nextPage = decodeURIComponent(params.nextPage || '')
        // let loginStatus = !!this.$store.state.userInfo.idNumber
        // if(this.nextPage && loginStatus){
        //     redirectTo(this.nextPage)
        // }
        // rpc('https://flameapp.cn/mbchannel/WEB030009.do').then((res) => {
        //     let base = res
        //     this.randomNum = base.body.data.randomNum
        // })
    },
    
	}
</script>

<style lang="scss" scoped>

.page_login_login{
    padding: 0 0.40rem;

    .form_logo_section{
        text-align: center;
        padding: 0.80rem 0 0.10rem 0;

        .image{
            width: 4rem;
            height: 0.70rem;
        }
    }

    .form_section{
        border-bottom: 0.01rem solid #EFEFEF;
        margin-top: 1rem;
        padding-bottom: 1px;
        display: flex;
        justify-content: flex-start;
        background-color: #FFFFFF;
    }

    .form_section .form_text{
        width: 1.80rem;
        flex-shrink: 0;
        flex-grow: 0;
        font-size: 0.36rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .form_section .form_input{
        flex: 1;
        font-size: 0.32rem;
    }

    .form_section .form_input .input-placeholder{
        color: #C9C8CE;
        font-size: 0.32rem;
    }

    .login_btn{
        margin-top: 1rem;
        height: 0.80rem;
        line-height: 0.80rem;
        font-size: 0.36rem;
        background-color: #3597E5;
        color: #FFFFFF;
        width: 6.68rem;
    }

    .login_btn:active{
        opacity: 0.8;
    }

    .register_link{
        width: 100%;
        text-align: center;
        color: #3597E5;
        margin-top: 0.80rem;
        font-size:0.36rem;
    }

}

</style>
