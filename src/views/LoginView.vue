<template lang="">
    <div class='gg-lol'>
        <form @submit.prevent="login">
            <div class='special-delivery'>
            <h2>Authorization</h2>
            <p v-if="error" class="title" style="color: red;">{{ error }}</p>
            </div>
                <label>enter Login</label>
            <input type='text' v-model="user">
                <label>enter Password</label> 
            <input type='text' v-model="password">
            <button type='submit'>Submit</button>   
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: '',
            password: '',
            error: '',

        }
    },
    methods: {
        async login() {
            try {
                const response = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: this.user,
                        password: this.password
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    console.log('done!')
                } else {
                    this.error = data.error || 'Invalid credentials';
                    console.log('govno')
                }

            } catch (error) {
                this.error = 'Произошла ошибка при отправке запроса';
                console.error(error);
            }
        }
    }
}
</script>
<style>
    .gg-lol{
        height: 545px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .special-delivery{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    form{
        width: 335px;
        height: 277px;
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
    }
    form label{
        color: #00000099;
    }
    form input{
        border: none;
        border-radius: 10px;
        box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
          0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
    }
   form button{
    outline: none;
    background: none;
    border: none;
    color: #00000099;

   }
</style>