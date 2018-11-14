$('#register-form').validate({
    rules: {
        firstName: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        lastName: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        'confirm-password': {
            equalTo: '[name="password"]'
        },
        birthday: {
            required: true
        },
        phone:{
            required: true,
            digits: true,
            maxlength: 10,
            minlength: 10,
        },
        avatar: {
            required: true,
            url: true
        },
        address: {
            required: true,
            minlength: 10,
            maxlength: 30
        },

    },
    messages: {
        firstName: {
            required: 'Vui lòng nhập tên của bạn.',
            minlength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        lastName: {
            required: 'Vui lòng nhập họ của bạn.',
            minlength: 'Họ quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        email: {
            required: 'Vui lòng email của bạn.',
            email: 'Vui lòng nhập email đúng định dạng'
        },
        password: {
            required: 'Vui lòng nhập password.',
            minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        'confirm-password': {
            equalTo: 'Password và confirm không giống nhau.'
        },
        birthday: {
            required: 'Vui lòng chọn ngày sinh.',
        },
        phone:{
            required: 'Vui lòng nhập số điện thoại của bạn',
            digits: 'Số diện thoại phải là chữ số',
            maxlength: 'Vui lòng nhập đúng {0} số',
            minlength: 'Vui lòng nhập đúng {0} số',
        },
        avatar: {
            required: 'Vui lòng nhập avatar.',
            url: 'VUi lòng nhập avatar đúng định dạng'
        },
        address: {
            required: 'Vui lòng nhập địa chỉ.',
            minlength: 'Vui lòng  nhập nhiều hơn {0} kí tự',
            maxlength: 'Vui lòng nhập ít hơn {0} kí tự'
        }
    }
});