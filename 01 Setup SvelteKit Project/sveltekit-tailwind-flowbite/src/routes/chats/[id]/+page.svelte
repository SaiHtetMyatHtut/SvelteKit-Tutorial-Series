<script lang="ts">
	import { page } from '$app/stores';
	import { afterUpdate, tick } from 'svelte';

	let id = $page.params.id;
    let messagesContainer: HTMLDivElement;

    // onrefresh svelte
    afterUpdate(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        messagesContainer.scrollIntoView({ behavior: 'smooth' });
    });

	let messages = [
		'Hello',
		'Hi',
		'How are you?',
		"I'm fine",
		'What are you doing?',
		"I'm doing great, I'm doing great, I'm doing great, I'm doing great, I'm doing great",
		'What about you?',
		"I'm doing great",
		'What about you?',
		"I'm doing great",
		'What about you?',
		"I'm doing great",
		'What about you?',
		"I'm doing great",
		'What about you?',
		"I'm doing great",
		'What about you?'
	];
	async function handleKeydown(this: { "on:keydown": (event: KeyboardEvent) => Promise<void>; class: string; placeholder: string; }, event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		event.preventDefault();
		(this as any).blur();
		await tick();
	}


</script>

<section class="w-screen h-screen bg-black p-10">
	<div class="flex flex-row h-full w-full bg-white rounded-md shadow-lg p-5 space-x-2">
		<div class="w-full h-full flex flex-col space-y-2">
			<div
                bind:this={messagesContainer}
				class="w-full min-h-[50px] flex-grow bg-black rounded-md overflow-y-scroll p-5 space-y-2 flex flex-col"
			>
				{#each messages as message, i}
					{#if i % 2 == 0}
						<div class="flex flex-row">
							<div
								class="h-full py-3 max-w-[25%] w-fit bg-white rounded-md flex justify-start items-center px-5 text-transparent
                                hover:bg-black hover:text-white transition-all"
							>
								{message}
							</div>
							<div class=" flex-grow" />
						</div>
					{:else}
						<div class="flex flex-row">
							<div class=" flex-grow" />
							<div
								class="h-full py-3 max-w-[25%] w-fit bg-white rounded-md flex justify-start items-center px-5 text-white
                                hover:bg-black hover:text-white transition-all focus:placeholder:text-transparent placeholder:text-black"
							>
								{message}
							</div>
						</div>
					{/if}
				{/each}
			</div>
			<input
				on:keydown={handleKeydown}
				class="w-full h-24 bg-black text-transparent
                rounded-md px-5 text-base font-semibold tracking-widest outline-none
                focus:bg-gray-400 focus:text-white focus:shadow-inner transition-all border-transparent
                focus:border-transparent focus:ring-0 text-center focus:placeholder:text-transparent"
				placeholder="To Type A Message Click Here."
			/>
		</div>
		<div class="w-[400px] bg-black h-full rounded-lg flex flex-col p-3">
			<p class="text-white text-center font-bold py-2 text-xl uppercase">Info Bar</p>
			<div class="h-1 bg-white" />
			<div class="" />
		</div>
	</div>
</section>
