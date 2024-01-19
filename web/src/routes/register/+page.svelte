<script lang="ts">
    import type { ActionData } from "./$types";
    
    export let form: ActionData
</script>

<section class="grid place-items-center w-full h-full p-2">
    <div class="h-full w-full md:w-[400px] flex flex-col gap-8 items-center justify-center">
        <h1 class="text-3xl md:text-5xl font-bold text-center w-full">Create your DUHUB account</h1>

        <span>Already have an account? <a href="/login" class="btn btn-link p-0">Login</a></span>

        <form method="post" class="w-full flex flex-col gap-4">
            <input required type="text" name="username" placeholder="Username" class="input focus:input-primary input-bordered w-full transition-all"/>

            <input required type="email" name="email" placeholder="Email" class="input focus:input-primary input-bordered w-full transition-all"/>

            <input required type="password" name="password" placeholder="Password" class="input focus:input-primary input-bordered w-full transition-all"/>

            <input required type="password" name="passwordConfirm" placeholder="Password Confirm" class="input focus:input-primary input-bordered w-full transition-all"/>

            <input required type="password" name="dupass" placeholder="DUHUB password" class="input focus:input-primary input-bordered w-full transition-all"/>

            <button class="btn btn-primary w-full">Create Account</button>
        </form>
    </div>
</section>

<style lang="postcss">
    form > input:focus{
        @apply scale-105;
    }
</style>