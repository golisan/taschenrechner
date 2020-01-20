<template>
    <div>
    <div class="grid-container">
        <div class="grid-item"><CalcButton></CalcButton></div>
        <div class="grid-item"><CalcButton></CalcButton></div>
        <div class="grid-item"><CalcButton></CalcButton></div>
        <div class="grid-item"><CalcButton></CalcButton></div>
        <div class="grid-item"><CalcButton></CalcButton></div>
        <div class="grid-item"><CalcButton></CalcButton></div>
        <div class="grid-item"><CalcButton></CalcButton></div>
        <div class="grid-item"><CalcButton></CalcButton></div>
        <div class="grid-item"><CalcButton></CalcButton></div>
    </div>
    </div>
</template>

<script>
    import CalcButton from "../components/buttons/CalcButton";
    export default {
        name: "rechner",
        components: {CalcButton}
    }
</script>

<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        background-color: #2196F3;
        padding: 5px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 10px;
        font-size: 30px;
        text-align: center;
    }
</style>