<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in tabBar">
                <router-link :to="{name:item.name}">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return {
            tabBar:[
                {
                    name:"home",
                    title:"报障",
                    icon:"&#xe666;"
                },
                {
                    name:"record",
                    title:"记录",
                    icon:"&#xe68c;"
                },
                {
                    name:"repository",
                    title:"知识库",
                    icon:"&#xe741;"
                },{
                    name:"my",
                    title:"我的",
                    icon:"&#xe600;"
                }
            ]
        }
    }
}
</script>

<style>
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: .03rem solid #e8e8e8;
    }

    #footer>ul{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    #footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }
    #footer>ul>li>a{
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         align-items: center;
    }
     #footer>ul>li>.router-link-active{
         color: #0199ff;
     }
     #footer>ul>li>a>i{
         font-size: .5rem;
     }
      #footer>ul>li>a>span{
          font-size: .18rem;
      }

</style>