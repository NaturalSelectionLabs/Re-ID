<template>
    <div class="p-3 center mx-auto">
        <div class="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-48">
            <div class="mb-4">
                <img
                    class="
                        w-auto
                        mx-auto
                        rounded-full
                        object-cover object-center
                    "
                    src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg"
                    alt="Avatar Upload"
                />
                <!-- TODO: User's avatar get -->
                <!-- TODO: Loading indicator -->
            </div>
            <label class="cursor-pointer mt-6">
                <span
                    class="
                        mt-2
                        text-base
                        leading-normal
                        px-4
                        py-2
                        bg-blue-500
                        text-white text-sm
                        rounded-full
                    "
                    >Select Avatar</span
                >
                <input
                    type="file"
                    class="hidden"
                    accept="image/*"
                    @change="fileSelected"
                />
            </label>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
const axios = require('axios');

@Options({
    props: {},
    components: {},
})
export default class Avatar extends Vue {
    /**
     * Pinata Ipfs Pin with user's avatar
     * @formData {string} file User pick avatar's event
     * @formData {string} pinataMetadata Pinata Metadata that contain "name" Request by Pinata
     * @formData {string} cidVersion Content Version Request by Pinata
     * @return {Promise<AxiosResponse<Array<string>>>} AxiosResponse
     */
    fileSelected(evt: {
        preventDefault: () => void;
        target: { files: any[] };
    }) {
        evt.preventDefault();
        let newAvatar = evt.target.files[0];

        let pinataMetadata = {
            name: '0xA9f4E906e4f1d386D06272E7ef1CE36A07B36537',
            // TODO: Get User address
        };
        let pinataMetadataStringify = JSON.stringify(pinataMetadata);
        const formData = new FormData();
        formData.append('file', newAvatar);
        formData.append('cidVersion', '0');
        formData.append('pinataMetadata', pinataMetadataStringify);
        axios
            .post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
                maxBodyLength: 'Infinity',
                headers: {
                    'Content-Type': `multipart/form-data;`,
                    pinata_api_key: '7a1cd1286fddab8cb792',
                    pinata_secret_api_key:
                        'eed51e69e8c6ffc04700f83597b46c617f275e9aae3218d9bbe037ea3889ad58',
                },
            })
            .then(function (response: any) {
                console.log(response.data.IpfsHash);
                // TODO: Update info to RSS3
            })
            .catch(function (error: any) {
                console.log(error);
                // TODO: Handle Error
            });
    }
}
</script>

<style lang="postcss"></style>
