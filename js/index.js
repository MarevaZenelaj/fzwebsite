function change_galleries(){
    console.log('called change galleries function');
    let radio_inputs = document.querySelectorAll('.radio-buttons form input');
    projects = radio_inputs[0];
    samples = radio_inputs[1];
    gallery = document.querySelector('.gallery');
    if (samples.checked == true){
        gallery.innerHtml = ```
            <div>
                <a href="/images/project_1.png" data-lightbox="mygallery"><img src="/images/project_1_small.png"></a>
            </div>
            <div>
                <a href="/images/project_2.png" data-lightbox="mygallery"><img src="/images/project_2_small.png"></a>
            </div>
            <div>
                <a href="/images/project_3.png" data-lightbox="mygallery"><img src="/images/project_3_small.png"></a>
            </div>
            <div>
                <a href="/images/project_4.png" data-lightbox="mygallery"><img src="/images/project_4_small.png"></a>
            </div>
            <div>
                <a href="/images/project_5.png" data-lightbox="mygallery"><img src="/images/project_5_small.png"></a>
            </div>
            <div>
                <a href="/images/project_6.png" data-lightbox="mygallery"><img src="/images/project_6_small.png"></a>
            </div>
            <div>
                <a href="/images/project_7.png" data-lightbox="mygallery"><img src="/images/project_7_small.png"></a>
            </div>
            <div>
                <a href="/images/project_8.png" data-lightbox="mygallery"><img src="/images/project_8_small.png"></a>
            </div>
            <div>
                <a href="/images/project_9.png" data-lightbox="mygallery"><img src="/images/project_9_small.png"></a>
            </div>
            <div>
                <a href="/images/project_10.png" data-lightbox="mygallery"><img src="/images/project_10_small.png"></a>
            </div>
        ```
    } else if (samples.checked = true){
        gallery.innerHtml = ```
            <div>
                <a href="/images/sample_1.jpg" data-lightbox="mygallery"><img src="/images/sample_1_small.jpg"></a>
            </div>
            <div>
                <a href="/images/sample_2.jpg" data-lightbox="mygallery"><img src="/images/sample_2_small.jpg"></a>
            </div>
            <div>
                <a href="/images/sample_3.jpg" data-lightbox="mygallery"><img src="/images/sample_3_small.jpg"></a>
            </div>
            <div>
                <a href="/images/sample_4.jpg" data-lightbox="mygallery"><img src="/images/sample_4_small.jpg"></a>
            </div>
            <div>
                <a href="/images/sample_5.jpg" data-lightbox="mygallery"><img src="/images/sample_5_small.jpg"></a>
            </div>
            <div>
                <a href="/images/sample_6.jpg" data-lightbox="mygallery"><img src="/images/sample_6_small.jpg"></a>
            </div>
            <div>
                <a href="/images/sample_7.jpg" data-lightbox="mygallery"><img src="/images/sample_7_small.jpg"></a>
            </div>
            <div>
                <a href="/images/sample_8.jpg" data-lightbox="mygallery"><img src="/images/sample_8_small.jpg"></a>
            </div>
            <div>
                <a href="/images/sample_9.jpg" data-lightbox="mygallery"><img src="/images/sample_9_small.jpg"></a>
            </div>
            <div>
                <a href="/images/sample_2.jpg" data-lightbox="mygallery"><img src="/images/sample_2_small.jpg"></a>
            </div>
        ```
    }
}




