---
layout: default
title: Home
---
<!-- Renders each file in the sections folders in order, assigning each a link-->
<div class="container-fluid">
    {% assign ordered = site.sections| sort:"number" %}
    {%for section in ordered%}
        <div class="jump" id="{{section.link}}">
        </div>
        <div class="row"  id="{{section.link}}content">
            {{section.content}}
        </div>
    {%endfor%}
</div>