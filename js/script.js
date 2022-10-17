$(document).ready(function () {
    $('.nav-toggle').on('click',function () {
        $(this).toggleClass('active');
        $('.menu').toggle();
        return false;
    });
    $(document).on('click','.dop_author', function(e) {
        e.preventDefault();
        let cloneForm = $(this).closest('.contest_form-block');
        $(this).parent('.contest_form-b-inner').clone().appendTo(cloneForm);
    });
    $('.dop_file').on('click', function(e) {
        e.preventDefault();
        let cloneFormFile = $(this).prev('.form-group_file');
        let cloneForm = $(this).closest('.contest_form-b-inner');
        let newFormFile = $(cloneFormFile).clone();
        cloneForm.data('counter', cloneForm.data('counter') + 1);
        newFormFile.find('.input__file').empty().attr('id','input__file-'+cloneForm.data('counter')+'i');
        newFormFile.find('label').attr('for','input__file-'+cloneForm.data('counter')+'i');
        $(this).before(newFormFile);
    });
    $(document).on('change','.input__file', function() {
        let path = this.value;
        let pos = path.lastIndexOf("\\");
        if (pos != -1) {
            path = path.substr(pos+1);
        }
        $(this).siblings('.input__file-name').html(path).addClass('mt-1');
        console.log($(this).siblings('.input__file-name').html(path));
    });
});