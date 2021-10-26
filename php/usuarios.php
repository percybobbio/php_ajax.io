<?php
    header('Content-type: application/json; charset=utf-8');

    $respuesta = [
        [
            'id' => '678687958',
            'nombre' => 'Carlos',
            'edad' => 23,
            'pais' => 'Mexico',
            'correo' => 'correo@correo.com'
        ],
        [
            'id' => '907h0ioihohi0',
            'nombre' => 'Alejandro',
            'edad' => 30,
            'pais' => 'Peru',
            'correo' => 'correo@correo.com'
        ]
    ];

    echo json_encode($respuesta);

    //echo '[{"nombre": "Carlos"}, {"nombre": "Alejandro"}]'

?>