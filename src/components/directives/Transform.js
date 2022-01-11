import Vue from "vue";

Vue.directive('meu-transform', {
    bind(el, binding, vnode){
        // let increment = binding.incremento.value || 90; 
        let current = 0;
        el.addEventListener('dblclick', function(){
            let increment = 90;
            let animate = false;

            if(binding.value){
                increment = binding.value.incremento;
                animate = binding.value.animate;
            }

            current+=increment; 
            if(animate)  el.style.transition = 'transform 0.5s'; 
            el.style.transform = `rotate(${current}deg)`;
        });
    }
});  