<template>
    <popover class="h-full">
        <template #controlLevel>
            <div 
                class="w-[48.5px] h-[48.5px] flex justify-center items-center bg-white rounded-md dark:bg-zinc-900"
            >
                <svg-icon name="heart" class="w-3 h-3" :innerClass="{'fill-red-500':true,'dark:fill-zinc-300':true}" />
            </div>
        </template>
        <template #contentLevel>
            <ul class="flex flex-col justify-center dark:bg-zinc-800">
                <li 
                    class="flex items-center cursor-pointer rounded-md px-1 py-1.5 hover:bg-red-100 dark:hover:bg-zinc-500"
                    v-for="item in  menuList"
                    :key="item.id"
                >
                    <svg-icon :name="item.icon" class="w-2 h-2 mr-1" :innerClass="{'fill-red-500':true,'dark:fill-zinc-300':true}" />
                    <span class="text-base text-red-500 dark:text-zinc-300">{{item.title}}</span>
                </li>
            </ul>

        </template>
    </popover>
</template>

<script setup>
     
const menuList = [
  {
    id: 0,
    title: 'User Info',
    icon: 'profile',
    path: '/profile'
  },
  {
    id: 1,
    title: 'Membership',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    id: 2,
    title: 'Log Out',
    icon: 'logout',
    path: ''
  }
]


</script>

<style lang="scss" scoped>

</style>