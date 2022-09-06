<template>
    <div class="bg-red-400 px-2.5 py-1.5 border-b border-b-zinc-200 flex items-center justify-between">
        <div 
            class="hello-icon w-[48.5px] h-full flex justify-center items-center bg-white rounded-md mr-3 cursor-pointer"
            @click="onHome"
        >
            <svg-icon class="w-[45px] h-[45px]" name="hello"></svg-icon>
        </div>
        <header-search class="flex-grow" />
        <header-theme class="ml-3 mr-3"></header-theme>
        <div 
            class="w-[48.5px] h-full flex justify-center items-center bg-white rounded-md mr-3 cursor-pointer ml-2"
        >
            <header-user-info></header-user-info>
        </div>
        
    </div>
</template>

<script setup>
    import headerSearch from './headerSearch/index.vue';
    import headerUserInfo from './headerUserInfo/index.vue';
    import headerTheme from './headerTheme/index.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const searchInput=ref('');
    const router = useRouter();
    // back to home
    const onHome = ()=>{
        router.push('/');
    }

</script>

<style lang="scss" scoped>
    .hello-icon:hover{
        animation-duration: 1.5s;
        animation-direction: alternate;
        animation-timing-function: ease-in-out;
        animation-name: swing;
        transform-origin: center center;
    }
    @keyframes swing{
        0%{
            transform:rotate(0);
        }
        15%{
            transform:rotate(15deg);
        }
        30%{
            transform:rotate(-15deg);
        }
        45%{
            transform:rotate(12.5deg)
        }
        60%{
            transform:rotate(-10deg)
        }
        75%{
            transform:rotate(7.5deg);
        }
        100%{
            transform: rotate(0);
        }
    }

</style>