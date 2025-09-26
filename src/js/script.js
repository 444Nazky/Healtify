      // scroll animations
      const observers = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('appear');
            io.unobserve(entry.target);
          }
        });
      },{threshold:0.1});
      observers.forEach(el=>io.observe(el));

      // example click animation
      document.getElementById('apptBtn').addEventListener('click', ()=>{
        const btn = document.getElementById('apptBtn');
        btn.classList.add('animate-ping');
        setTimeout(()=>btn.classList.remove('animate-ping'),600);
        alert('Appointment modal placeholder!');
      });