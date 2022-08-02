<script lang="ts">
    let show: boolean = true;
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
                <h2 class="card-title">What we mean by affiliated?</h2> 
                <p>Affiliations can include having a financial interest, relatives who work with the supplier, or the supplier being your prior employer.</p>
                </div>
            </div>
        </div>
        <div class="flex gap-4 justify-center pt-4">
            <div class="flex align-middle gap-2">
                <label for="affilation__yes">Yes</label>
                <input id="affilation__yes" type="radio" name="radio-1" class="radio" checked on:click={() => show = true} />
            </div>
            <div class="flex align-middle gap-2">
                <label for="affiliation__no">No</label>
                <input id="affiliation__no" type="radio" name="radio-1" class="radio" on:click={() => show = false}/>
            </div>
        </div>
    </div>
</div>

{#if show}
    <div class="form-control w-full max-w-xs">
        <label for="affiliation__input" class="label">
            <span class="label-text">Explain your affiliation to the nominated supplier.</span>
        </label>
        <input id="affiliation__input" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </div>
{/if}