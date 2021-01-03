document.getElementById("myBtn").addEventListener("click", displayPass);

        function displayPass() {
            var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var lowerStr = "abcdefghijklmnopqrstuvwxyz";
            var numericStr = "0123456789";
            var specialStr = "@!#$%^&*";

            //alert(lowerStr.charAt(0));
            var length = prompt("Provide password length between 8 and 128?");

            if (length < 8 || length > 128) {
                alert("Invalid password length.");
            } else {
                var specialChar = confirm("Click ok to confirm including special characters");
                var numericChar = confirm("Click ok to confirm including numeric characters");
                var lowerCase = confirm("Click ok to confirm including lowercase characters");
                var upperCase = confirm("Click ok to confirm including uppercase characters");

                var charset = "";

                if (specialChar) {
                    charset = charset + specialStr;
                }
                if (numericChar) {
                    charset = charset + numericStr;
                }
                if (lowerCase) {
                    charset = charset + lowerStr;
                }
                if (upperCase) {
                    charset = charset + upperStr;
                }

                var passwd = '';
                for (i = 1; i < length; i++) {
                    var c = Math.floor(Math.random() * charset.length + 1);
                    passwd = passwd + charset.charAt(c)
                }
                document.getElementById("password").value = passwd;
            }
        }