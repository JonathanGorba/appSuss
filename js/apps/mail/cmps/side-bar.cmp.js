import {mailService} from '../services/MailService.js';
import percentageBar from './../cmps/percentage-bar.cmp.js' 
// import percentageBar from '../../../../img/mail/logo.png'
export default {
    props:['perc'],
    template: `
                <div class="side-bar">
                        <ul class="folder-list">
                            <div class="button-sidebar" @click = "compose" >compose</div>

                                <li class="li" @click="inbox('inbox')">
                                    <div class="button-sidebar">Inbox</div>
                                </li>
                                <!-- <li class="li">Starred</li> -->
                                <li class="li-sent" @click="sent('sent')">
                                    <div class="button-sidebar">Sent</div>
                                </li>
                            <!-- <li class="li">Drafts</li> -->
                            <li>
                                <percentage-bar :percBar="perc" ></percentage-bar>
                            </li>

                            <img class="mail-logo" src="../../../../img/mail/logo.png">
                            
                        </ul>

                </div>
    `,
    data() {
        return {
        }
    },
    methods: {
        compose() {
            this.$emit('compose')
        },
        inbox() {
            this.$emit('inbox', "inbox")
        },
        sent() {
            this.$emit('inbox', "sent")
        },
        
        
        
        
    },
    computed: {
        showPercentage(){
            mailService.readPercentage()
                .then(result =>{
                    this.percentage = Math.floor(result)
                })
                
            return this.percentage;
        },
        
    },
    components:{
        percentageBar,
    }

}