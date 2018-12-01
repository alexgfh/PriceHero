<?php
namespace Ultrahack;

require_once './vendor/autoload.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;


class Products {

     protected $database;
     protected $dbname = 'products';

     public function __construct(){
          $acc = ServiceAccount::fromJsonFile(  __DIR__ . '/secret/pricehero-7686f-1bf31c226688.json');
          $firebase = (new Factory)->withServiceAccount($acc)->create();

          $this->database = $firebase->getDatabase();
     }

     public function get(int $EANcode = NULL){
          if (empty($EANcode) || !isset($EANcode)) {return FALSE;}

          if ($this->database->getReference($this->dbname)->getSnapshot()->hasChild($EANcode)){
               return $this->database->getReference($this->dbname)->getChild($EANcode)->getValue();
          } else {
               return FALSE;
          }

     }
     public function insert(array $data){
          if (empty($data) || !isset($data)) { return FALSE; }

          foreach ($data as $key => $value){
               $this->database->getReference()->getChild($this->dbname)->getChild($key)->set($value);
          }

          return TRUE;

     }
     public function delete(int $EANcode){
          if (empty($EANcode) || !isset($EANcode)) { return FALSE; }

          if ($this->database->getReference($this->dbname)->getSnapshot()->hasChild($EANcode)){
               $this->database->getReference($this->dbname)->getChild($EANcode)->remove();
               return TRUE;
          } else {
               return FALSE;
          }
     }
}
