  var db = [];

        var editIndex = null;

        function hapus(index) {
            db.splice(index, 1);

            renderTable();
        }

        function reset() {
            let inputNama = document.getElementById("nama");
            let inputRole = document.getElementById("role");

            editIndex = null;
            inputNama.value = "";
            inputRole.value = "";
        }

        function edit(index) {
            let orang = db[index];
            let inputNama = document.getElementById("nama");
            let inputRole = document.getElementById("role");

            inputNama.value = orang.name;
            inputRole.value = orang.role;

            inputNama.value = "";

            editIndex = index;
        }

        function renderTable() {
            let table = document.getElementById("table");
            table.innerHTML = "";

            let i;
            for (i = 1; i <= db.length; i++) {
                let orang = db[i - 1];
                table.innerHTML += `
						<div class="col-sm-4 mb-3">
							<div class="card">
								<div class="card-body">
									<div class="mb-5">
										<h3>${orang.nama}</h3>
										<span class="text-secondary">${orang.role}</span>
									</div>
									<div class="d-flex justify-content-end">
										<button class="btn btn-warning mx-1 px-3" onClick="edit(${i - 1})" >Edit</button>
										<button class="btn btn-danger px-3" onClick="hapus(${i - 1})" >Hapus</button>
									</div>
								</div>
							</div>
						</div>
					`;
            }
        }

        window.onload = function () {
            let btnSave = document.getElementById("save");

            btnSave.addEventListener("click", function () {
                let inputNama = document.getElementById("nama");
                let inputRole = document.getElementById("role");

                if (editIndex === null) {
                    db.push({
                        nama: inputNama.value,
                        role: inputRole.value,
                    });
                } else {
                    db[editIndex] = {
                        nama: inputNama.value,
                        role: inputRole.value,
                    };
                }
                reset();
                renderTable();
            });
        };