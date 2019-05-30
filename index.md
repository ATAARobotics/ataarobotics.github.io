---
layout: default
title: Under Construction
---
{% assign about = site.sections | where_exp:"sections", "sections.title == 'About'" | first %}
{% assign ata = site.sections | where_exp:"sections", "sections.title == 'ATA'" | first %}
{% assign swat = site.sections | where_exp:"sections", "sections.title == 'SWAT'" | first %}
{% assign ftc = site.sections | where_exp:"sections", "sections.title == 'FTC'" | first %}
{% assign contact = site.sections | where_exp:"sections", "sections.title == 'Contact'" | first %}
<div class="container">
    <div class="row">
        <div class="col-12" style="text-align: center">
            <img src="/resources/img/ataa.png" class="img-fluid" />
            <h1>Alberta Tech Alliance Association</h1>
            <h1>Under Construction</h1>
            <a href="http://4334.ca">4334.ca</a>
        </div>
    </div>
</div>
<script>
    window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 76);
});
</script>
<div class="container-fluid" style="height: 10000px">
    {% assign ordered = site.sections| sort:"number" %}
    {%for section in ordered%}
        <div class="row" id='{{section.link}}' style="background-color: {{section.background}}">
            <div class="col-12">
                {{section.content | markdownify}}
            </div>
        </div>
    {%endfor%}
</div>
</body>