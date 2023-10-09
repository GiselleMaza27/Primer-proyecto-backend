const {Router, Router}= require ('express')
const router = Router()

router.get("/",function(req,res){
    res.json({
        message:'get',
    })

})
router.post("/",function(req,res){
    res.json({
        message:'post',
    })

})
router.put("/",function(req,res){
    res.json({
        message:'put'
    })
})
router.delete("/",function(req,res){
    res.json({
        message:'delete',
    })

})

module.exports = router;