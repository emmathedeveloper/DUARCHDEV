<script lang="ts">
    import type { ActionData } from "./$types"

    export let form: ActionData
</script>

<section class="grid place-items-center w-full h-full p-2">
    <div class="h-full w-full md:w-[400px] flex flex-col gap-8 items-center justify-center">
        <h1 class="text-3xl md:text-5xl font-bold text-center w-full">Login</h1>

        <span>Dont have an account yet? <a href="/register" class="btn btn-link p-0">Create Account</a></span>

        {#if form?.notVerified}
        <div role="alert" class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Your account isn't verified.</span>
          </div>
        {/if}

        <form method="post" class="w-full flex flex-col gap-4">
            <input required type="text" name="username" placeholder="Username" class="input focus:input-primary input-bordered w-full transition-all"/>

            <input required type="email" name="email" placeholder="Email" class="input focus:input-primary input-bordered w-full transition-all"/>

            <input required type="password" name="password" placeholder="Password" class="input focus:input-primary input-bordered w-full transition-all"/>

            <button class="btn btn-primary w-full">Login</button>
        </form>
    </div>
</section>

<style lang="postcss">
    form > input:focus {
        @apply scale-105;
    }
</style>