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
<div class="container-fluid" style="height: 10000px">
    <div id='about' style="padding-top: 80px; margin-top: -80px;">
        {{about.content | markdownify}}
    </div>
    <div id='ata' style="padding-top: 80px; margin-top: -80px;">
        {{ata.content | markdownify}}
    </div>
    <div id="swat" style="padding-top: 80px; margin-top: -80px;">
        {{swat.content | markdownify}}
    </div>
    <div id="ftc" style="padding-top: 80px; margin-top: -80px;">
        {{ftc.content | markdownify}}
    </div>
    <div id="contact" style="padding-top: 80px; margin-top: -80px;">
        {{contact.content | markdownify}}
    </div>
</div>
</body>