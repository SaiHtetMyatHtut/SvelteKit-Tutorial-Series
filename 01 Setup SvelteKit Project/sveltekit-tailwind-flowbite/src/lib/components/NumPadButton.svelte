<script lang="ts">
	export let add_on: string = 'aspect-square';
</script>

<button
	on:click
	class="rounded-md bg-white shadow-md flex items-center justify-center text-gray-700 text-xl font-bold border border-gray-200 
	hover:bg-gray-50 hover:shadow-xl active:bg-gray-100 active:shadow-inner cursor-pointer transition-all select-none
	{add_on}"
>
	<slot />
</button>
