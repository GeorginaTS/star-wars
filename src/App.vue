<template>
  <div class="w-full h-screen flex flex-col">
    <div class="flex justify-between items-center w-full h-24">
      <img class="h-24"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuS0oKRMfVxz7LTlb-y2nhtzo2mzIKlfj-g&s"
        alt="Star Wars">
      <nav class="p-4">
        <ul class="flex justify-around gap-4">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/films">Films</RouterLink>
          </li>
          <li>
            <RouterLink to="/people">Characters</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <hr class="bg-black h-[2px] m-2">
    <main class="flex justify-center w-full h-full">
      <RouterView />
    </main>
    <footer class="w-full h-10 p-2 bg-neutral-800 text-center mt-4 text-white">All rigths reserved</footer>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
li {
  border: 1px solid grey;
  padding: 4px 20px;
  background-color: #ebe8e8;
  border-radius: 0.7rem;
}
</style>
