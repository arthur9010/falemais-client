export default {
    props: {
        ruleRequired: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
        },
        options: {
            type: Array,
            required: true
        },
        optionLabel: {
            type: String
        }
    },
    data: () => ({
        value: null
    })
}