<template>
    <popover class="h-full">
        <template #controlLevel>
            <div 
                class="w-[48.5px] h-[48.5px] flex justify-center items-center bg-white rounded-md"
            >
                <svg-icon name="heart" class="w-3 h-3" innerClass="fill-red-500" />
            </div>
        </template>
        <template #contentLevel>
            <ul class="flex flex-col justify-center">
                <li 
                    class="flex items-center cursor-pointer rounded-md p-1 hover:bg-red-100 "
                    v-for="item in  menuList"
                    :key="item.id"
                >
                    <svg-icon :name="item.icon" class="w-2 h-2 mr-1" :innerClass="{'fill-red-500':true}" />
                    <span class="text-base text-red-500">{{item.title}}</span>
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