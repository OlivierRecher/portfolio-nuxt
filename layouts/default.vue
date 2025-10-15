<template>
    <div>
        
        <!-- Navigation -->
        <Navigation />
        
        <!-- Theme Toggle -->
        <div class="fixed top-4 right-4 z-50">
            <UButton
                v-if="colorMode.preference === 'dark'"
                icon="i-lucide-sun" 
                size="lg"
                color="primary"
                variant="solid"
                @click="colorMode.preference = 'light'"
            />
            <UButton
                v-else
                icon="i-lucide-moon" 
                size="lg"
                color="primary"
                variant="solid"
                @click="colorMode.preference = 'dark'"
            />
        </div>
        
        <main>
          <slot />
        </main>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>
