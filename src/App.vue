<template>
    <div id="app">
        <div class="test">
            <h2>{{aaa}}</h2>
            <h2>{{this.$store.state.num}}</h2>
            <!-- <h2>{{this.$store.getters.numadd}}</h2> -->
            <button @click="add(1000111)">addd</button>
        </div>
        <tabbar>
            <tabbar-item path="/index">
                <img slot="item-icon" src="@/assets/img/index.png" alt />
                <img slot="item-icon1" src="@/assets/img/index1.png" alt />
                <p slot="item-text">首页</p>
            </tabbar-item>
            <tabbar-item path="/worktable">
                <img slot="item-icon" src="@/assets/img/worktable.png" alt />
                <img slot="item-icon1" src="@/assets/img/worktable1.png" alt />
                <p slot="item-text">工作台</p>
            </tabbar-item>
            <tabbar-item path="/mine">
                <img slot="item-icon" src="@/assets/img/wode.png" alt />
                <img slot="item-icon1" src="@/assets/img/wode1.png" alt />
                <p slot="item-text">我的</p>
            </tabbar-item>
        </tabbar>
        <router-view></router-view>
    </div>
</template>


<script>
import Tabbar from "@/components/tabbar/Tabbar";
import TabbarItem from "@/components/tabbar/TabbarItem";

export default {
    data() {
        return {
            isActive: false,
            aaa: "aaaa"
        };
    },
    methods: {
        add(count) {
            console.log(count);
            this.$store.commit("numadd", count);
        }
    },
    components: {
        Tabbar,
        TabbarItem
    },
    created() {
        this.$axios({
            url: "/home/multidata"
        }).then(res => {
            console.log(res);
        });
    }
};
</script>



<style>
* {
    margin: 0;
    padding: 0;
}
</style>
