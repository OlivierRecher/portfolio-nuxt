<template>
    <div class="h-28 flex flex-row">
        <div class="column-blur relative z-10 left-0 sm:w-1/3 w-1/5 bg-gradient-to-r from-white from-90% dark:from-gray-900" />

        <!-- Ticker -->
        <div class="ticker flex justify-center items-center h-12 mx-auto w-1/3">
            <div class="ticker__list flex relative sm:left-[55%] left-[95%] mt-16">
                <div
                    v-for="(item, index) in ticker"
                    :key="index"
                    class="ticker__item font-bold whitespace-nowrap mr-12 sm:text-2xl text-gray-900 dark:text-white"
                >
                    {{ item }}
                </div>
            </div>
        </div>

        <div class="column-blur relative z-10 right-0 sm:w-1/3 w-1/5 bg-gradient-to-l from-white from-90% dark:from-gray-900" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            ticker: [
                "JavaScript",
                "PHP",
                "React.js",
                "Vue.js",
                "Symfony",
                "Tailwindcss",
                "Flutter",
                "Nuxt.js",
            ],
        };
    },
    mounted() {
        const ticker = this.$el.querySelector(".ticker");
        const list = this.$el.querySelector(".ticker__list");
        const clone = list.cloneNode(true);

        ticker.appendChild(clone);
    },
};
</script>