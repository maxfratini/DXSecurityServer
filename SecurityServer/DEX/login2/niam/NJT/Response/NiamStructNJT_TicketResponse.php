<?php
/**
 * File for class NiamStructNJT_TicketResponse
 * @package Niam
 * @subpackage Structs
 * @author WsdlToPhp Team <contact@wsdltophp.com>
 * @version 20150429-01
 * @date 2016-01-21
 */
/**
 * This class stands for NiamStructNJT_TicketResponse originally named NJT_TicketResponse
 * Meta informations extracted from the WSDL
 * - from schema : var/wsdltophp.com/storage/wsdls/1820eaa0153a13dc8d6d1795fb2d9920/wsdl.xml
 * @package Niam
 * @subpackage Structs
 * @author WsdlToPhp Team <contact@wsdltophp.com>
 * @version 20150429-01
 * @date 2016-01-21
 */
class NiamStructNJT_TicketResponse extends NiamWsdlClass
{
    /**
     * The NJT_TicketResult
     * Meta informations extracted from the WSDL
     * - maxOccurs : 1
     * - minOccurs : 1
     * @var string
     */
    public $NJT_TicketResult;
    /**
     * Constructor method for NJT_TicketResponse
     * @see parent::__construct()
     * @param string $_nJT_TicketResult
     * @return NiamStructNJT_TicketResponse
     */
    public function __construct($_nJT_TicketResult)
    {
        parent::__construct(array('NJT_TicketResult'=>$_nJT_TicketResult),false);
    }
    /**
     * Get NJT_TicketResult value
     * @return string
     */
    public function getNJT_TicketResult()
    {
        return $this->NJT_TicketResult;
    }
    /**
     * Set NJT_TicketResult value
     * @param string $_nJT_TicketResult the NJT_TicketResult
     * @return string
     */
    public function setNJT_TicketResult($_nJT_TicketResult)
    {
        return ($this->NJT_TicketResult = $_nJT_TicketResult);
    }
    /**
     * Method called when an object has been exported with var_export() functions
     * It allows to return an object instantiated with the values
     * @see NiamWsdlClass::__set_state()
     * @uses NiamWsdlClass::__set_state()
     * @param array $_array the exported values
     * @return NiamStructNJT_TicketResponse
     */
    public static function __set_state(array $_array,$_className = __CLASS__)
    {
        return parent::__set_state($_array,$_className);
    }
    /**
     * Method returning the class name
     * @return string __CLASS__
     */
    public function __toString()
    {
        return __CLASS__;
    }
}
