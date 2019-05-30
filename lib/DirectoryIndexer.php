<?php

class DirectoryIndexer
{
    private $directoryMap = array();
    private $keys = array();
    private $menuKeys = array();
    private $values = array();
    private $defaultKey;
    private $defaultValue;

    public function __construct($dirPath, $overrides, $default){
        $this->default = $default;
        $allDirItems = scandir($dirPath);
        foreach($allDirItems as $thisItem){
            if(is_file($dirPath."/".$thisItem)){
                $key = explode("_", explode(".", $thisItem)[0])[1];
                $value = $dirPath."/".$thisItem;
                $this->directoryMap[$key] = $value;
                array_push($this->keys, $key);
                array_push($this->values, $value);
                if(!(strpos("_", $thisItem===false)))
                    array_push($this->menuKeys, $key);
            }
        }
        foreach($overrides as $key => $value){
            $this->directoryMap[$key] = $value;
            if(!in_array($key, $this->keys))
                array_push($this->keys, $key);
            if(!in_array($value, $this->values))
                array_push($this->values, $value);
        }
        asort($this->directoryMap);
        $this->defaultKey = $default;
        $this->defaultValue = $this->directoryMap[$default];
    }

    public function getKeys(){return $this->keys;}
    public function getMenuKeys(){return $this->menuKeys;}
    public function getValues(){return $this->values;}
    public function getDefaultKey(){return $this->defaultKey;}
    public function getDefaultValue(){return $this->getDefaultValue;}
    public function get($key){
        $temp = null;
        return (($temp = $this->directoryMap[$key]) == null) ? $this->defaultValue : $temp;
    }
    public function getSameOrDefaultKey($key){
        return (in_array($key, $this->keys)) ? $key : $this->default;
    }
}
