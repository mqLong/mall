<template>
    <div class="tabbar-item" @click="toTargetPage">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon1"></slot>
        </div>
        <div :class="{textActive:isActive}">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    computed: {
        isActive(){
            return this.$route.path==this.path
        }
    },
    props: {
        path: String
    },
    methods: {
        toTargetPage() {
            this.$router.replace(this.path);
        }
    }
};
</script>

<style>
.textActive{
    color: orange;
    font-weight: bold;
}
.tabbar-item {
    text-align: center;
    flex: 1;
}
div.tabbar img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
}
</style>