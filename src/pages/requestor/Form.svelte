<script lang='ts'>
    import type { Requestor } from '../../types/index'

    export let buttonHeading: string

    let phone = 'Phone'
    let cell = 'Cell'
    let email = 'Email'
    let department = 'Department'
    let supervisor = 'Supervisor'
    let supervisorEmail = 'Manager\'s Email'

    const requestor: Requestor = {
        name: 'Taj Kirkpatrick',
        phone: '832-333-6654',
        email: 'tkirk@surgeenergya.com',
        department: 'IDS'
    }

    function myFunc() {
        buttonHeading = requestor.name
        phone = requestor.phone
        email = requestor.email
        department = requestor.department
        cell = requestor.cell
        supervisor = requestor.supervisor
        supervisorEmail = requestor.supervisorEmail
    }
</script>

<div class="grid grid-cols-2">
    <div class="dropdown relative" >
        <label for="requestor-info" tabindex="0" class="btn">{buttonHeading}</label>
        <ul id="requestor-info" tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box absolute left-4 right-4">
            <li>
                <button on:click={myFunc}>
                    Taj Kirkpatrick
                </button>
            </li>
        </ul>
    </div>
    <!-- <div>
        <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
    </div> -->
    <div class="flex flex-col items-center gap-y-3">
        <input type="text" placeholder={phone} class="input input-bordered w-full max-w-xs btn-disabled" />
        <input type="text" placeholder={cell} class="input input-bordered w-full max-w-xs btn-disabled" />
        <input type="text" placeholder={email} class="input input-bordered w-full max-w-xs btn-disabled" />
        <input type="text" placeholder={department} class="input input-bordered w-full max-w-xs btn-disabled" />
        <input type="text" placeholder={supervisor} class="input input-bordered w-full max-w-xs btn-disabled" />
        <input type="text" placeholder={supervisorEmail} class="input input-bordered w-full max-w-xs btn-disabled" />
    </div>
</div>