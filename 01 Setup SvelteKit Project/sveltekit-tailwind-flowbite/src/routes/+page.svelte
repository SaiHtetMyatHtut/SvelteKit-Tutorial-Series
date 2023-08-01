<script lang="ts">
	import { goto } from '$app/navigation';
	import NumPadButton from '../lib/components/NumPadButton.svelte';
	import { Input } from 'flowbite-svelte';

	let numPads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'Del'];
	let counter = 0;

	let codes = ['', '', '', ''];
	$: codeOne = codes[0];
	$: codeTwo = codes[1];
	$: codeThree = codes[2];
	$: codeFour = codes[3];

	function handleClickNumPad(value: any) {
		console.log(codes);
		console.log(counter);
		if (counter >= 3) counter = 3;
		if (counter <= 0) counter = 0;
		if (value == 'Del') {
			codes[counter] = '';
			counter--;
			return;
		} else {
			codes[counter] = value;
			counter++;
			return;
		}
	}

	function handleEnter() {
		if (codeOne == '' || codeTwo == '' || codeThree == '' || codeFour == '') {
			return;
		} else {
			let id = codes.toString().replaceAll(',', '');
			goto(`/chats/${id}`);
		}
	}
</script>

<section class="w-screen h-screen">
	<div class="w-full h-full flex flex-col items-center justify-center space-y-2">
		<div class="bg-white w-[300px] flex flex-row justify-center space-x-2 p-5 rounded-lg shadow-lg">
			<Input
				bind:value={codeOne}
				type="tel"
				maxlength="1"
				placeholder="_"
				required
				autofocus
				readonly
				class="h-full aspect-square text-center caret-transparent text-gray-700 text-xl font-bold"
			/>
			<Input
				bind:value={codeTwo}
				type="tel"
				maxlength="1"
				placeholder="_"
				required
				readonly
				class="h-full aspect-square text-center caret-transparent text-gray-700 text-xl font-bold"
			/>
			<Input
				bind:value={codeThree}
				type="tel"
				maxlength="1"
				placeholder="_"
				required
				readonly
				class="h-full aspect-square text-center caret-transparent text-gray-700 text-xl font-bold"
			/>
			<Input
				bind:value={codeFour}
				type="tel"
				maxlength="1"
				placeholder="_"
				required
				readonly
				class="h-full aspect-square text-center caret-transparent text-gray-700 text-xl font-bold"
			/>
		</div>
		<div class="w-[300px] bg-white rounded-lg shadow-lg px-7 py-5 flex-col flex space-y-2">
			<div class="w-full grid grid-cols-3 gap-1 aspect-square">
				{#each numPads as numPad}
					{#if numPad === 0}
						<NumPadButton add_on="col-span-2" on:click={() => handleClickNumPad(numPad)}>
							{numPad}
						</NumPadButton>
					{:else}
						<NumPadButton on:click={() => handleClickNumPad(numPad)}>{numPad}</NumPadButton>
					{/if}
				{/each}
			</div>
		</div>
		<div class="bg-white w-[300px] p-5 rounded-lg shadow-lg">
			<button
				on:click={() => handleEnter()}
				class="w-full h-16 bg-black text-white rounded-lg hover:bg-gray-900 hover:shadow-xl active:bg-gray-500 active:shadow-inner cursor-pointer transition-all select-none font-bold uppercase"
				>Enter</button
			>
		</div>
	</div>
</section>
