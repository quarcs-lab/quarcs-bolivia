---
type: topic
title: Example
description: A description of the dataset and the relavent topic
dataSource: https://raw.githubusercontent.com/DSSD-Madison/Nagoya/main/data/GeoDS4Bolivia.geojson
---
{{< wrapper >}}

<body onload="loadMap()"></body>
<div id='map'></div>
<div class="topic-content">
    <h1>Relevant Variables and Data</h1>
    <button type="button">Download data</button>
</div>

<style>

    #map {
          width: 100%; 
          height: 90vh;
          align-self: center;
        }

    .topic {
        display: flex;
        width: auto;
        justify-content: center;
        flex-direction: column;
    }

    .map{
        display: flex;
        width:100%;
        /* height:600px; */
        flex-direction: column;
        align-self: center;
    }

    .topic-content{
    display: flex;
    flex-direction: column;
    width:auto;
    padding-left: 2rem;
    text-align: left;
    }

    .topic-content h1{
    font-size: 2rem;
    }

    .topic-content button{
    color: white;
    background-color: #394D6B;
    padding: 0%;
    border-radius: 8px;
    width:8rem;
    text-align: center;
    font-size:1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    }

    table {
    border-collapse: collapse;
    }

    td, th {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
    }

    tr:nth-child(even) {
    background-color: #dddddd;
    }

</style>

{{</ wrapper >}}

{{< table "table table-striped table-bordered" >}}

| **Fact** | **Information** |
| --- | --- |
| Official Name | Plurinational State of Bolivia |
| Capital | La Paz (administrative) and Sucre (constitutional) |
| Population | 11.8 million (2021 estimate) |
| Area | 1,098,581 sq km (424,164 sq mi) |
| Official Languages | Spanish, Quechua, Aymara and 36 other indigenous languages |
| Currency | Boliviano (BOB) |
| Government | Unitary presidential constitutional republic |
| President | Luis Arce |
| GDP | $44.1 billion (2020 estimate) |
| Major Industries | Mining, agriculture, natural gas, and tourism |
| National Symbol | Andean condor |
| National Anthem | "Bolivian National Anthem" (Himno Nacional de Bolivia) |


{{< /table >}}

