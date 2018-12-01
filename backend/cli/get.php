<?php
/*
First round to get all users ID and hackathon_token
*/
$url = 'https://api.dev.receipthero.io/api/v1/users/';
$header = array();
$header[] = 'RECEIPTHERO_APIKEY:8d32fdd6248935964d129b8515bfc3d3afd22963';

//  Initiate curl
$ch = curl_init();
// Will return the response, if false it print the response
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Set the header
curl_setopt($ch, CURLOPT_HTTPHEADER,$header);
// Set the url
curl_setopt($ch, CURLOPT_URL,$url);
// Execute
$result=curl_exec($ch);
// Closing
curl_close($ch);

// Will dump a beauty json :3
$result = json_decode($result, true)['results'];
//var_dump($result);


/*
Second round searching for all receipts user by user
*/
$counter = 0;
$all_receipts = array();

foreach ($result as $key => $value) {
     //var_dump( $value['id']);
     //var_dump( $value['hackathon_token']);

     $url = 'https://api.dev.receipthero.io/api/v1/users/' . $value['id'] .  '/receipts/ ';
     $header = array();
     $header[] = 'RECEIPTHERO_APIKEY:8d32fdd6248935964d129b8515bfc3d3afd22963';
     $header[] = 'Authorization: Bearer ' . $value['hackathon_token'];

     //  Initiate curl
     $ch = curl_init();
     // Will return the response, if false it print the response
     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
     // Set the header
     curl_setopt($ch, CURLOPT_HTTPHEADER,$header);
     // Set the url
     curl_setopt($ch, CURLOPT_URL,$url);
     // Execute
     $receipts=curl_exec($ch);
     // Closing
     curl_close($ch);

     // Will dump a beauty json :3
     //var_dump(json_decode($receipts, true));

     $receipts = json_decode($receipts, true)['results'];

     //for fast testing purpose only
     //     array_push($all_receipts,$receipts);
     //     $counter ++;

     /*
     third  round searching for all receipts data user by user
     */
     foreach ($receipts as $_receipts_key => $receipts_value) {

          $url = $receipts_value['hero_json_url'];
          $header = array();
          $header[] = 'RECEIPTHERO_APIKEY:8d32fdd6248935964d129b8515bfc3d3afd22963';
          $header[] = 'Authorization: Bearer ' . $value['hackathon_token'];

          //  Initiate curl
          $ch = curl_init();
          // Will return the response, if false it print the response
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
          // Set the header
          curl_setopt($ch, CURLOPT_HTTPHEADER,$header);
          // Set the url
          curl_setopt($ch, CURLOPT_URL,$url);
          // Execute
          $receipt=curl_exec($ch);
          // Closing
          curl_close($ch);

          //array_push($all_receipts, $receipt );
          $receipt = json_decode($receipt, true);
          $all_receipts[$counter] = $receipt;
          echo $counter;
          $counter ++;
     }
}

file_put_contents('all_receipts-v3.json', json_encode($all_receipts,true) );
echo $counter;
