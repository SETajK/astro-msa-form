<script lang="ts">
    const forwardLink: string = "/submit"
    const backwardLink: string = "/nomination/comments"
    const minimumCharLimit: number = 10

    let disabledBtn: boolean = true
    let show: boolean = true
    let value: string = ""
    $: valueLength = value.length as number

    function toggleBools(value: boolean) {
        show = value
        disabledBtn = value
    }

    function unlockDisabledBtn() {
        if (valueLength >= minimumCharLimit) {disabledBtn = false; return} else disabledBtn = true
    }
</script>

<div class="w-full h-24 bg-slate-300 flex justify-center">
    <div class="max-w-3xl pt-4">
        <span class="font-bold">Are you affiliated with this supplier?</span> 
        <div class="dropdown dropdown-end">
            <label for="drop_info" tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </label>
            <div id="drop_info" tabindex="0" class="card compact dropdown-content shadow bg-base-100 rounded-box w-64 absolute md:left-10 -top-44 md:top-0">
                <div class="card-body">
                <h2 class="card-title">What do we mean by affiliated?</h2> 
                <p>Affiliations can include having a financial interest, relatives who work with the supplier, or the supplier being your prior employer.</p>
                </div>
            </div>
        </div>
        <div class="flex gap-4 justify-center pt-4">
            <div class="flex align-middle gap-2">
                <label for="affilation__yes">Yes</label>
                <input id="affilation__yes" type="radio" name="radio-1" class="radio" checked on:click={() => toggleBools(true)} />
            </div>
            <div class="flex align-middle gap-2">
                <label for="affiliation__no">No</label>
                <input id="affiliation__no" type="radio" name="radio-1" class="radio" on:click={() => toggleBools(false)}/>
            </div>
        </div>
    </div>
</div>

{#if show}
    <div class="form-control w-full max-w-xs">
        <label for="affiliation__input" class="label">
            <span class="label-text">Explain your affiliation to the nominated supplier.</span>
        </label>
        <input id="affiliation__input" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" bind:value on:input={unlockDisabledBtn} />
    </div>
{/if}


<div class="btn-group w-full flex mt-8 justify-around">
    <a href={backwardLink} class="btn btn-outline px-12">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288q.413-.012.713.288q.3.275.313.687q.012.413-.288.713L7.4 11h11.175q.425 0 .713.287q.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7q.012.425-.288.7q-.275.3-.7.3q-.425 0-.725-.3Z"></path></svg>
        Previous page
    </a>
    {#if disabledBtn}
    <a href={forwardLink} class="btn btn-outline w-56" disabled >Submit
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6Z"></path></svg>
    </a>
    {:else}
    <a href={forwardLink} class="btn btn-outline w-56" >Submit
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--material-symbols" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6Z"></path></svg>
    </a>
    {/if}
</div>
<div class="pt-12 hidden lg:block">
    <ul class="steps">
        <li class="step step-primary">Get Started</li>
        <li class="step step-primary">Requestor Information</li>
        <li class="step step-primary">Supplier Information</li>
        <li class="step step-primary">Scope Information</li>
        <li class="step step-primary">Reason for Nomination</li>
        <li class="step step-primary">Supplier Affiliation</li>
        <li class="step">Submit</li>
    </ul>
</div>