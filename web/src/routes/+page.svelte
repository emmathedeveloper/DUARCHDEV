<script lang="ts">
  import LandingPage from "$lib/views/landingpage/landing_page.svelte";
  import UserPage from "$lib/views/user/user_page.svelte";
  import type { PageData } from "./$types";

  export let data: PageData
</script>

{#if data.user}
    <UserPage {...data}/>
{/if}

{#if !data.user}
    <LandingPage />
{/if}
