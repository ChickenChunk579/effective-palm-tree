<script>
    import { get } from 'svelte/store';
    import { getContext, setContext } from 'svelte';
    


    function buyAutoclicker() {
        var level = window.localStorage.getItem("level");
        alert(level);
        if (parseInt(level) % 3 == 0) {
            window.localStorage.setItem("level", (parseInt(level) - 3).toString());
        }
    }
</script>

<div class="sidenav">
    <u><h1>Shop</h1></u>
    <button on:click={buyAutoclicker}>Autoclicker: 3 levels</button>
    <button>Autoclicker 5x: 15 levels</button>
    <button>Autoclicker 10x: 30 levels</button>
    <hr/>
</div>