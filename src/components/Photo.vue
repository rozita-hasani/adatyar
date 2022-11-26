<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-text>
                    <VueCropper v-show="selectedFile" ref="cropper" :src="selectedFile" alt="Source Image"></VueCropper>
                </v-card-text>
                <v-card-actions>
                    <v-btn class="primary" @click="saveImage(), (dialog = false)">Crop</v-btn>
                    <v-btn color="primary" text @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
    components: { VueCropper },
    data() {
        return {
            cropedImage: '',
            selectedFile: '',
            dialog: false,
            files: '',
        }
    },
    methods: {
        saveImage() {
            const userId = this.$route.params.user_id
            this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL()
            this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                const formData = new FormData()
                formData.append('profile_photo', blob, 'name.jpeg')
                axios
                    .post('/api/user/' + userId + '/profile-photo', formData)
                    .then((response) => {
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }, this.mime_type)
        },
        onFileSelect(e) {
            const file = e.target.files[0]
            this.mime_type = file.type
            console.log(this.mime_type)
            if (typeof FileReader === 'function') {
                this.dialog = true
                const reader = new FileReader()
                reader.onload = (event) => {
                    this.selectedFile = event.target.result
                    this.$refs.cropper.replace(this.selectedFile)
                }
                reader.readAsDataURL(file)
            } else {
                alert('Sorry, FileReader API not supported')
            }
        },
    },
}
</script>