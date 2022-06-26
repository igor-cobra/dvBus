var Icons = (function () {
  var instance;

  function createInstance() {
    var object = new Object();
    object.main =
      "https://raw.githubusercontent.com/igor-cobra/dvBus/LoginPage/assets/icon.png";
    object.userDefault =
      "https://raw.githubusercontent.com/igor-cobra/dvBus/LoginPage/assets/icon.png";
    object.view =
      "https://raw.githubusercontent.com/igor-cobra/dvBus/LoginPage/assets/icon.png";
    object.plus =
      "https://raw.githubusercontent.com/igor-cobra/dvBus/LoginPage/assets/icon.png";

    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default Icons;
