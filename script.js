// Sayfa yüklendiğinde animasyonu başlat
window.addEventListener('load', function () {
  // Profile Card elementi ve yazılar
  const profileCard = document.querySelector('.profile-card');
  const profileName = document.querySelector('.profile-name');
  const profileDescription = document.querySelector('.profile-description');
  const socialLinks = document.querySelectorAll('.social-links a');
  const profileImage = document.querySelector('.profile-image img');
  
  // Başlangıçta opaklığı sıfır yap
  profileCard.style.opacity = 0;
  profileName.style.opacity = 0;
  profileDescription.style.opacity = 0;
  profileImage.style.opacity = 0;

  // Yavaşça görünür hale getirme (Hepsi aynı anda ama farklı zamanlamalarla)
  setTimeout(function () {
      profileCard.style.transition = 'opacity 2s ease-in-out';
      profileCard.style.opacity = 1; // Tüm kartı görünür yap

      setTimeout(() => {
          profileImage.style.transition = 'opacity 2s ease-in-out';
          profileImage.style.opacity = 1; // Profil resmini görünür yap
      }, 100); // 0.1 saniye sonra

      setTimeout(() => {
          profileName.style.transition = 'opacity 2s ease-in-out';
          profileName.style.opacity = 1; // İsmi görünür yap
      }, 200); // 0.2 saniye sonra

      setTimeout(() => {
          profileDescription.style.transition = 'opacity 2s ease-in-out';
          profileDescription.style.opacity = 1; // Açıklamayı görünür yap
      }, 300); // 0.3 saniye sonra

      socialLinks.forEach((link, index) => {
          setTimeout(() => {
              link.style.transition = 'opacity 2s ease-in-out';
              link.style.opacity = 1; // Her bir sosyal medya ikonunu görünür yap
          }, 400 + index * 100); // Her biri için 0.4 saniye sonra başlayarak 0.1 saniye aralıklarla
      });
  }, 100); // Animasyonu başlatmadan önce 0.1 saniye gecikme
});
