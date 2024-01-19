<script lang="ts">
  import type { AuthModel } from "pocketbase";
  import { onMount } from "svelte";


    export let user: AuthModel

    export let posts: AuthModel

    onMount(() => {
        console.log(user);
    })
</script>

{#if user}
    <section class="h-full w-full p-4">
        <nav class="navbar shadow-md bg-base-100 rounded-md">
            <div class="navbar-start">
            <h1 class="font-bold text-3xl">Welcome {user.username}</h1>
            </div>

            <div class="navbar-end flex items-center gap-4">

                <strong class="btn btn-ghost">30 🔥</strong>

                <a href="/post" class="btn btn-primary">Add to Archive</a>

                {#if !user?.avatar || !user?.avatar.trim()}
                <div class="w-[50px] h-[50px] rounded-full skeleton"></div>
                
                {:else}
                <div class="w-[50px] h-[50px] overflow-hidden rounded-full">
                    <img src="{user.avatar}" alt="DP" class="object-cover h-full w-full">
                </div>
                {/if}
            </div>
        </nav>
        <main class="overflow-scroll h-[90%] w-full mt-4">
            <!-- {@debug user} -->
        </main>
    </section>
{/if}